export default function FormSuccess({ whatsappUrl, buttonLabel }) {
  return (
    <div className="form-success">
      <h3>Thank You!</h3>
      <p>Your message has been received. I will get back to you shortly.</p>
      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: "1.5rem" }}
        >
          {buttonLabel || "Send via WhatsApp"}
        </a>
      )}
    </div>
  );
}
