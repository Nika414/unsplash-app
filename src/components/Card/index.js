import './Card.css';
import Downloader from '../../images/iconmonstr-download-16.svg'

function Card({ author, src, alt, title, html }) {
    return (
        <div className="Card">
            <h2 className="Card-author">{author}</h2>
            <a href={html}>
                <div className="Card-img" style={{ backgroundImage: `url(${src})` }} alt={alt}>
                </div>
            </a>
            <p className="Card-description">{title}</p>
        </div>
    );
}

export default Card;