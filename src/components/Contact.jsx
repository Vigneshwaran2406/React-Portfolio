import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_zhra7bo'; // Replace with your EmailJS service ID
      const templateId = 'template_wn3ulya'; // Replace with your EmailJS template ID
      const publicKey = '9g4mCUsxKVxiwjxBx'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'vvignesh000@gmail.com', // Your email where you want to receive messages
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">Let's Start a Conversation</div>
        <div className="section-divider"></div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <p className="contact-description">
              I'm always interested in hearing about new opportunities, creative 
              projects, or just having a chat about technology and design. Don't 
              hesitate to reach out!
            </p>

            <div>
              <div className="contact-item">
                <div className="contact-item-icon email">
                  <Mail size={24} />
                </div>
                <div className="contact-item-content">
                  <p>Email</p>
                  <p>vvignesh000@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon phone">
                  <Phone size={24} />
                </div>
                <div className="contact-item-content">
                  <p>Phone</p>
                  <p>+91 6382005906</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon location">
                  <MapPin size={24} />
                </div>
                <div className="contact-item-content">
                  <p>Location</p>
                  <p>Kariapatti, Virudhunagar District</p>
                </div>
              </div>
            </div>

            <div className="reach-me">
              <h3>Reach Me</h3>
              <div className="social-links">
                <a
                  href="https://github.com/Vigneshwaran2406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vigneshwaran-sivakumar-70b5a0227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={24} />
                </a>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="status-message success">
                <CheckCircle size={20} />
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="status-message error">
                <AlertCircle size={20} />
                <p>Failed to send message. Please try again or contact me directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="form-input"
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="form-textarea"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;