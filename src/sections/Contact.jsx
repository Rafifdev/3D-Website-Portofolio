import { useState } from "react";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    "merafif28@gmail.com"
  )}&su=${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
    formData.message
  )}`;

  const directGmail = (e) => {
    window.open(url, "_blank");
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      className="relative flex items-center c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={'#FFFFFF'}
        refresh
      />
      <div className="flex flex-col items-center justify-center max-w-md mx-auto border border-white/10 rounded-2xl bg-primary p-5">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build website, improve your existing
            platform, or bring a unique project to life, I'm here to
            collaboration.
          </p>
        </div>
        <form className="w-full">
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="Yoapipp"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="yoapipp123@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            onClick={directGmail}
            type="submit"
            className="w-full px-1 py-3 text-lg cursor-pointer text-center rounded-md bg-radial from-lavender to-royal hover-animation"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
