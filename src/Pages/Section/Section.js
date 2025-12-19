import "../../Stayles/Section.css"
import card1 from "../../Asstens/card1.svg"
import card2 from "../../Asstens/card2.svg"
import card3 from "../../Asstens/card3.svg"
import card4 from "../../Asstens/card4.svg"
import card5 from "../../Asstens/card5.svg"
import card6 from "../../Asstens/card6.svg"

function Section() {

    const cards = [
        {
            img: card1,
            title: "Cropped Top",
            about: "Under $29.00"
        },
        {
            img: card2,
            title: "Elegant Top",
            about: "Under $49.00"
        },
        {
            img: card3,
            title: "Cropped Top",
            about: "Under $29.00"
        },
        {
            img: card4,
            title: "Elegant Top",
            about: "Under $49.00"
        },
        {
            img: card5,
            title: "Cropped Top",
            about: "Under $29.00"
        },
        {
            img: card6,
            title: "Elegant Top",
            about: "Under $49.00"
        }
    ]

    return (
        <div className="section">
            <div className="section-text">
                <h2>Shop Best Collection Ever with Multiple Style</h2>
                <hr />
            </div>

            <div className="section-card">
                {cards.map((card, index) => (
                    <div className="card-stn" key={index}>
                        <img src={card.img} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>{card.about}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section
