import Head from 'next/head'
import Link from "next/link"
import { useState } from 'react'
import styles from '../styles/contact.module.css'


function contact_us() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
        console.log(name, email, message);
        // Add any additional logic here for handling the form data
      };
      
    

      return (
        <>
          <h1 className={styles.center}>Contact Us</h1>
          <div className={styles.container}>
            <form className={styles.formContactUs} onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
      
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
      
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
      
              <button className={styles.buttonContactUs} type="submit">
                Submit
              </button>
            </form>
            <div className={styles.socialMediaLinkContainer}>
              <a
                href="https://www.instagram.com/cultureforyou_/"
                target="_blank"
                className={styles.socialMediaLink}
              >
                Contact us on Instagram
                <img
                  src="/index/instagram-logo.png"
                  style={{ width: "5%", height: "4%" }}
                  alt="Contact us on Instagram"
                />
              </a>
            </div>
          </div>
        </>
      );
      
  }
export default contact_us