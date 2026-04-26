const Contact = () => {
  return (
    <section id="contact" className="py-28 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Let’s Connect</h2>

      <div className="space-y-3 text-gray-400">
        <p>Email: sairusvarma201234@gmail.com</p>
        <p>Phone: +91 9494603170</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sairus-varma/"
            target="_blank"
            className="text-primary"
          >
            Profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
