const Card = ({ title, description, imageUrl, alt }) => {
    return (
        <div className="cardContainer">
            <img src={imageUrl} alt={alt} />
            <span className="titleText">{title}</span>
            <span className="desText">{description}</span>
        </div>
    )
}

export default Card;