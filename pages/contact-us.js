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
        <h1 className={styles.subCenter}>We'd Love to Hear From You</h1>
        <div className={styles.container}>
          {notification && <p>{notification}</p>}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center", marginLeft: "19.5%" }}>
             
              <a className={styles.pName} href="https://www.instagram.com/cultureforyou_/" target="_blank">
                <img src="/index/instagram-logo.png" style={{ width: "60%", height: "15%" }} />
                <p >Instagram</p>
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <a  className={styles.pName} href="mailto:cultureforu1@gmail.com">
                <img class src="/index/Gmail_Logo.png" style={{ width: "20%", height: "20%" }} />
                <p>Email</p>
              </a>
            </div>
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
  