import languageData from "../../Data/Language.json";
import "../../Stayles/Main.css";

function Main({ dark, lang }) {
    const currentLang =
        languageData.find(l => l.code === lang) || languageData[1];

    const main = currentLang.main;

    return (
        <div className={`main ${dark ? "dark" : ""}`}>
            <div className="main-text">
                <span>{main.top}</span>
                <h2>{main.sale}</h2>
                <h4>{main.off}</h4>
                <p>{main.code}</p>
                <button>{main.btn}</button>
            </div>
        </div>
    );
}

export default Main;
