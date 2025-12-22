import "../../Stayles/Footer.css";
import languageData from "../../Data/Language.json";

function Footer({ dark, lang }) {
    const currentLang = languageData.find(l => l.code === lang) || languageData[0];

    const footerLinks = currentLang?.footer?.links || [
        "MY ACCOUNT",
        "YOUR SERVICE",
        "CAREERS",
        "PRIVACY POLICY"
    ];

    const unsubscribeText = currentLang?.footer?.unsubscribe || "Unsubscribe";
    const footerText = currentLang?.footer?.footerText || "";

    return (
        <footer className={dark ? "footer dark" : "footer"}>
            <div className="footer-i">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-snapchat"></i>
                <i className="fa-brands fa-pinterest-p"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
            <hr />
            <div className="footer-links">
                {footerLinks.map((link, i) => (
                    <h2 key={i}>{link}</h2>
                ))}
            </div>

            <p className="footer-text">{footerText}</p>

            <a href="#" className="unsubscribe">{unsubscribeText}</a>
        </footer>
    );
}

export default Footer;
