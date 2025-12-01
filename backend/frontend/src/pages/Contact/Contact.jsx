import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-box">
        <h1 className="contact-title">Võta meiega ühendust</h1>
        <p className="contact-subtitle">
          Kui sul on küsimusi, ettepanekuid või soovid meiega koostööd teha, võta julgelt ühendust.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h2>Asutajad</h2>
            <p>Markus – projekti juht</p>
            <p>Tavid – arendaja</p>
            <p>Theodor – disainer</p>
          </div>

          <div className="contact-item">
            <h2>Kontaktandmed</h2>
            <p>Telefon: +372 5555 5555</p>
            <p>E-post: info@matatuutor.ee</p>
            <p>Aadress: Tallinn, Ehitajate tee 5</p>
          </div>

          <div className="contact-item">
            <h2>Sotsiaalmeedia</h2>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Instagram</a></p>
            <p><a href="#">LinkedIn</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
