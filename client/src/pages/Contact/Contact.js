import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { validateEmail } from "../../utils/helpers";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or username is invalid");

      return;
    }

    if (!message) {
      setErrorMessage("Message is invalad");
    }

    alert(`Thankyou ${name}, I will be in touch soon!`);
    setEmail("");
    setName("");
    setMessage("");
  };
  const styles = {
    outterDiv: {
      backgroundColor: "rgb(40, 40, 41)",
      color: "white",
      marginBottom: "10px",
      paddingBottom: "5rem",
    },
    title: { color: "rgb(211, 213, 0)" },
  };

  return (
    <div style={styles.outterDiv}>
      <h3 className="container p-4"style={styles.title}>Contact</h3>
       <form className="container">
      
       <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="John Doe"
            name="name"
            onChange={handleInputChange}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            name="email"
            onChange={handleInputChange}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            id="messageInput"
            rows="3"
            name="message"
            onChange={handleInputChange}
            value={message}
          ></textarea>
        </div>
        <div className="mb-3">
          <Button type="button" onClick={handleFormSubmit}>
            Send
          </Button>
        </div>{" "}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )} 
      </form>
      <div id="way-to-contact" className="container d-flex flex-column text-center">
        <h6>Call/Text me at: </h6>
            <a className="text-decoration-none text-white" href="tel:609-972-9066"> 609-972-9066</a>
            
          </div>
    </div>
  );
}
