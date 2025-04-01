import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with form submission logic (e.g., API call)
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
          <form onSubmit={handleSubmit}>
            <h2 className="heading">
              Contact <span>Me!</span>
            </h2>

            <div className="field-box">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
