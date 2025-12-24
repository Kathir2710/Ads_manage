export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          Have questions or need support? Send us a message and we’ll get back to you.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
