import '../../Stayles/Article.css';
import languageData from '../../Data/Language.json';

function Article({ dark, lang }) {
    const currentLang = languageData.find(l => l.code === lang) || languageData[0];

    return (
        <div className={dark ? "article dark" : "article"}>
            <div className="article-text">
                <h2>{currentLang.main.top}</h2>
                <p>{currentLang.main.code}</p>
                <button>{currentLang.main.btn}</button>
            </div>
        </div>
    );
}

export default Article;
