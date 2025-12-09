export default function Contact() {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
  
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" rows={5}></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  