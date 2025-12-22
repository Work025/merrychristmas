import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import Section from "./Pages/Section/Section";
import Article from "./Pages/Article/Article";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );

  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "EN"
  );

  // localStorage saqlash
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);


  // Add to cart
  const addToCart = (item) => {
    const exist = cart.find(c => c.id === item.id);
    if (exist) {
      setCart(cart.map(c =>
        c.id === item.id ? { ...c, qty: c.qty + 1 } : c
      ));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQty = (id, type) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, qty: type === "inc" ? item.qty + 1 : item.qty - 1 }
          : item
      ).filter(item => item.qty > 0)
    );
  };

  return (
    <div className={dark ? "app dark" : "app"}>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        updateQty={updateQty}
        dark={dark}
        setDark={setDark}
        lang={lang}
        setLang={setLang}
      />

      <Main dark={dark} lang={lang} />

      <Section dark={dark} addToCart={addToCart} />

      <Article dark={dark} lang={lang} />

      <Footer dark={dark} lang={lang} />
    </div>
  );
}

export default App;
