import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = ({ onSendMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      alert('Name, phone number, and message are required!');
      return;
    }

    onSendMessage(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', phone: '', email: '', inquiryType: 'General Inquiry', message: '' });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      {/* Send Us a Message Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email (Optional)"
            className="w-full p-3 border rounded"
          />
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 border rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Additional Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Location */}
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">📍 Our Location</h3>
            <p>123 Luxury Lane</p>
            <p>Automotive City, AC 12345</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              Get Directions
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">📞 Phone</h3>
            <p>(555) 123-4567</p>
            <p>Mon-Sat: 9am-6pm</p>
            <a
              href="tel:5551234567"
              className="text-primary-600 hover:underline"
            >
              Call Now
            </a>
          </div>

          {/* Email */}
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">📧 Email</h3>
            <p>info@prestigeauto.com</p>
            <p>support@prestigeauto.com</p>
            <a
              href="mailto:info@prestigeauto.com"
              className="text-primary-600 hover:underline"
            >
              Send Email
            </a>
          </div>

          {/* Business Hours */}
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">🕒 Business Hours</h3>
            <p>Monday–Friday: 9am–7pm</p>
            <p>Saturday: 10am–6pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;