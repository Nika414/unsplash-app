import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <h2 className="Card-author">{props.author}</h2>
            <img className="Card-img" src={props.src} alt={props.alt} />
            <p className="Card-description">{props.title}</p>

        </div>
    );
}

export default Card;