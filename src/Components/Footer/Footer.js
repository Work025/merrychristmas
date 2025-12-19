import "../../Stayles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-i">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-snapchat"></i>
                <i class="fa-brands fa-pinterest-p"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
            <hr />
            <div className="footer-links">
                <h2>MY ACCOUNT</h2>
                <h2>YOUR SERVICE</h2>
                <h2>CAREERS</h2>
                <h2>PRIVACY POLICY</h2>
            </div>

            <p className="footer-text">
                ©2023 Christmas, Inc. The brand names, slogans, logos, other trademarks
                of FridaySale's goods, promotions belong exclusively to FridaySale Inc.
            </p>

            <a href="#" className="unsubscribe">Unsubscribe</a>
        </footer>
    );
}

export default Footer;