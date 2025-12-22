import { useState } from "react";
import "../../Stayles/Header.css";
import logo from "../../Asstens/headerlogo.svg";
import languageData from "../../Data/Language.json";

function Header({ cart, removeFromCart, updateQty, dark, setDark, lang, setLang }) {
    const [open, setOpen] = useState(false);

    // Agar til topilmasa, default tilni oladi
    const currentLang = languageData.find(l => l.code === lang) || languageData[0];
    const links = currentLang.links || [];
    const cartTitle = currentLang.cartTitle || "Your Cart";

    return (
        <header className={`header ${dark ? "dark" : ""}`}>
            <div className="header-logo">
                <img src={logo} alt="Logo" />
            </div>

            <ul className="header-ul">
                {links.map((link, i) => (
                    <li key={i}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>

            <div className="header-menu">
                <i className="fas fa-bars" onClick={() => setOpen(true)}></i>
            </div>

            <div className={`view-card ${open ? "show" : ""}`}>
                <div className="cart-head">
                    <h2>{cartTitle}</h2>
                    <div className="cart-controls">
                        <i className="fas fa-sun" onClick={() => setDark(false)}></i>
                        <i className="fas fa-moon" onClick={() => setDark(true)}></i>
                        <i className="fas fa-times" onClick={() => setOpen(false)}></i>
                    </div>
                </div>

                <div className="header-cards">
                    {cart.length === 0 && <p>Cart is empty</p>}
                    {cart.map(item => (
                        <div className="cart-item" key={item.id}>
                            <p>{item.title}</p>
                            <div className="qty">
                                <button onClick={() => updateQty(item.id, "dec")}>−</button>
                                <span>{item.qty}</span>
                                <button onClick={() => updateQty(item.id, "inc")}>+</button>
                            </div>
                            <i className="fas fa-times remove" onClick={() => removeFromCart(item.id)}></i>
                        </div>
                    ))}
                </div>

                <div className="lang">
                    {languageData.map(l => (
                        <button
                            key={l.code}
                            onClick={() => setLang(l.code)}
                            className={l.code === lang ? "active" : ""}
                        >
                            {l.code}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
