import { useState } from "react";
import { query } from "../lib/db";
import styles from "../styles/UpdateUser.module.css";


export default function UpdateUser(userId) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !phone || !email || !password || !passwordConfirmation) {
      setError("All fields are required");
      return;
    }
    if (password !== passwordConfirmation) {
      setError("Passwords do not match");
      return;
    }
    const results = await query({
      query:
        "UPDATE users SET first_name = ?, last_name = ?, phone = ?, email = ?, password = ? WHERE id = ?",
      values: [firstName, lastName, phone, email, password, userId],
    });
    
    
    setMessage("User updated successfully");
  };

  return (
    <div className={styles.center}>
       <div className={styles.formWrapper}>
          
       <h1 className={styles.title}>Update User</h1>

       <form onSubmit={handleSubmit}>
  <div className={styles.inputGroup}>
    <label htmlFor="firstName">First Name</label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={firstName}
      onChange={(event) => setFirstName(event.target.value)}
    />
  </div>
  
  <div className={styles.inputGroup}>
    <label htmlFor="lastName">Last Name</label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      value={lastName}
      onChange={(event) => setLastName(event.target.value)}
    />
  </div>
  
  <div className={styles.inputGroup}>
    <label htmlFor="phone">Phone Number</label>
    <input
      type="text"
      id="phone"
      name="phone"
      value={phone}
      onChange={(event) => setPhone(event.target.value)}
    />
  </div>
  
  <div className={styles.inputGroup}>
    <label htmlFor="email">Email Address</label>
    <input
      type="text"
      id="email"
      name="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
  </div>

  <div className={styles.inputGroup}>
    <label htmlFor="password">New Password</label>
    <input
      type="password"
      id="password"
      name="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
  </div>
  
  <div className={styles.inputGroup}>
    <label htmlFor="passwordConfirmation">Confirm Password</label>
    <input
      type="password"
      id="passwordConfirmation"
      name="passwordConfirmation"
      value={passwordConfirmation}
      onChange={(event) => setPasswordConfirmation(event.target.value)}
    />
  </div>
  
  {error && <p style={{ color: "red" }}>{error}</p>}
  <button type="submit">Update User</button>
</form>

      {message && <p>{message}</p>}
    </div>
      </div>
        
  );
  
}
