import { useState } from 'react'
import './App.css'

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const SubmitButton = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={SubmitButton}>
        <div>
          <label><h1 style={{color : "Grey"}}><strong>Contact Us</strong></h1></label>
          <label><strong>Name:</strong></label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label><strong>Email:</strong></label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label><strong>Message:</strong></label>
          <br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{backgroundColor : "green", borderRadius: "50px"}}>Click To Submit</button>
      </form>

      {submittedData && (
        <div style={{ width: "200px" , justifyContent: "center", alignItems: "center", margin: "auto" ,border: "1px solid black", padding: "10px", marginTop: "20px"}}>
          <h3>Submitted Data</h3>
          <br />
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}
