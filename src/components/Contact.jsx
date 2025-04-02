import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Manually create the payload from the form data
    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
    };

    // Send email using send() method
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData, // Passing the data as an object
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
          setStatus("Your message has been sent successfully!");
          formRef.current.reset(); // Reset form after submission
        },
        (error) => {
          console.log("Error sending email:", error);
          setStatus(
            `Failed to send message. Please try again. Error: ${error.text}`
          );
        }
      );
  };

  // Contact details array to avoid repetition
  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "(+91) 9113142147",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "chandan7953@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Address",
      value: "Rane Nagar, Nashik Maharashtra",
    },
  ];

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-box">
          <h2>Let's Work Together</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            voluptatem illo magnam similique velit at mollitia corporis quaerat
            eaque asperiores.
          </p>

          {/* Map over the contact details array */}
          {contactDetails.map((item, index) => (
            <div className="contact-detail" key={index}>
              <i>{item.icon}</i>
              <div className="detail">
                <p>{item.label}</p>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-box">
          <form ref={formRef} onSubmit={handleSubmit}>
            <h2 className="heading">
              Contact <span>Me!</span>
            </h2>

            <div className="field-box">
              <input type="text" name="name" placeholder="Full Name" required />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>

          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
