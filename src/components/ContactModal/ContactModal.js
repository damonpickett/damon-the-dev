import "./ContactModal.css";

const ContactModal = (props) => {
  if (!props.contactModal) {
    return null;
  }

  return (
    <div id="contact-modal">
      <div className="contact-form">
        <div className="title">
          <h2>Contact</h2>
          <button className="close-button" onClick={() => props.setContactModal(false)}>
            <span className="close-icon">&times;</span>
          </button>
        </div>
        <div className="body">
          <form
            action="https://formsubmit.co/damon.pickett@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your name" />
            <input type="text" name="company" placeholder="Your company" />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
            <input type="text" name="telephone" placeholder="Your phone #" />
            {/* <input
              type="hidden"
              name="_next"
              value="https://damonpickett.github.io/damonpickett/thankyou.html"
            /> */}
            <input
              type="hidden"
              name="_subject"
              value="New enquiry from portfolio site"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="How can I help you?"
            ></textarea>
            <button className='clipped' type="submit">Send</button>
            <p>
              Please feel free to connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/damon-pickett/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </p>
          </form>
        </div>
        <div className="send"></div>
      </div>
    </div>
  );
};

export default ContactModal;
