import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    body: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    emailjs
      .send(
        'service_mhhzoxc', // Your EmailJS Service ID
        'template_d0hcnzu', // Your EmailJS Template ID
        {
          from_name: formData.email,
          subject: formData.subject,
          message: formData.body,
        },
        '72RQz-BgNbnVMwHRt' // Your EmailJS Public Key (replacing USER ID)
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setFormData({ email: '', subject: '', body: '' }); // Clear form
        },
        (error) => {
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <section id='contact' className="flex flex-col items-center justify-center p-10 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-white">Let's Connect!</h2>

      {/* Contact Form Card */}
      <div className="p-6 border-2 border-[#39FF14] rounded-md shadow-md w-full max-w-xl bg-gray-800">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded-md border-2 border-gray-300 focus:border-[#39FF14] focus:ring-[#39FF14] outline-none"
              placeholder="Your email"
            />
          </div>

          {/* Subject Field */}
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-white mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="p-2 rounded-md border-2 border-gray-300 focus:border-[#39FF14] focus:ring-[#39FF14] outline-none"
              placeholder="Subject"
            />
          </div>

          {/* Body Field */}
          <div className="flex flex-col">
            <label htmlFor="body" className="text-white mb-2">Message</label>
            <textarea
              id="body"
              name="body"
              rows="6"
              required
              value={formData.body}
              onChange={handleChange}
              className="p-2 rounded-md border-2 border-gray-300 focus:border-[#39FF14] focus:ring-[#39FF14] outline-none"
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-[#39FF14] text-black rounded-md transition hover:bg-[#28cc10] shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
