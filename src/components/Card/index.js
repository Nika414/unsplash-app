import './Card.css';

function Card({author, src, alt, title}) {
    return (
        <div className="Card">
            <h2 className="Card-author">{author}</h2>
            <img className="Card-img" src={src} alt={alt} />
            <p className="Card-description">{title}</p>

        </div>
    );
}

export default Card;