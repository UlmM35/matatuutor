import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/kontakt">Kontakt</a>
          <a href="/faq">KKK</a>
        </div>
        <div className="footer-links">
          <a href="/tule-opetajaks">Tule õpetajaks</a>
          <a href="/privacy">Tingimused ja privaatsus</a>
        </div>
        <div className="footer-social">
          <p className="footer-address">
            Harjumaa, Tallinn. <br />
            Ehitajate tee 5, 19806
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;