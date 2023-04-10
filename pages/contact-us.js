import Head from 'next/head'
import Link from "next/link"
import { useCallback, useState } from 'react'
import styles from '../styles/contact.module.css'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState('');

    const { executeRecaptcha } = useGoogleReCaptcha();
    
    const handleSubmit = useCallback(
      (e) => {
        e.preventDefault();
        
        if (!executeRecaptcha) {
          console.log("Execute recaptcha not yet available");
          return;
        }
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
          console.log(gReCaptchaToken, "response Google reCaptcha server");
          submitEnquiryForm(gReCaptchaToken);
          
        });
      },
      [executeRecaptcha, name, email, message]
    );

    
    const submitEnquiryForm = (gReCaptchaToken) => {
      fetch("/api/enquiry", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          gRecaptchaToken: gReCaptchaToken,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res, "response from backend");
          if (res?.status === "success") {
            setNotification(res?.message);
            console.log(name, email, message);
           
            
          } else {
            setNotification(res?.message);
          }
        });
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
            {notification && <p>{notification}</p>}
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
  export default function contact_us(pageProps) {
    return (
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: 'head',
          nonce: undefined,
        }}
      >
        <ContactUs {...pageProps} />
      </GoogleReCaptchaProvider>
      
    );
    
  }
  