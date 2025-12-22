import { useState } from "react";
import "../../Stayles/Section.css";
import cardjson from "../../Data/Section.json";

function Section({ addToCart, dark }) {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;

    // current cards for this page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardjson.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(cardjson.length / cardsPerPage);

    return (
        <div className={dark ? "section dark" : "section"}>
            <div className="section-card">
                {currentCards.map((card) => (
                    <div className="card-stn" key={card.id}>
                        <img src={card.image} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>${card.price}</p>
                        <button onClick={() => addToCart(card)}>Add to cart</button>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={i + 1 === currentPage ? "active-page" : ""}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Section;
