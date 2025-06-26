import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="newsletter">
      <div className="newsletter-header">
        <Mail className="newsletter-header-icon" />
        <h2 className="newsletter-title">Stay Updated</h2>
      </div>
      
      {!isSubscribed ? (
        <>
          <p className="newsletter-desc">
            Get the latest news delivered straight to your inbox. No spam, just quality journalism.
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button
              type="submit"
              className="newsletter-btn"
            >
              Subscribe Now
            </button>
          </form>
        </>
      ) : (
        <div className="newsletter-success">
          <CheckCircle className="newsletter-success-icon" />
          <h3 className="newsletter-success-title">Thank You!</h3>
          <p className="newsletter-success-desc">You've successfully subscribed to our newsletter.</p>
        </div>
      )}
    </div>
  );
};

export default Newsletter;