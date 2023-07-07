import "./ContactModal.css";

const ContactModal = (props) => {
  let visibility = "hide";

  if (props.contactModal) {
    visibility = "show";
  }
  return (
    <div id="contact-modal" className={visibility}>
      <h1>Contact Modal</h1>
    </div>
  );
};

export default ContactModal;
