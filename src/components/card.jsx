const Card = ({ title, description, imageUrl, alt }) => {
    return (
        <div className="cardContainer">
            <img className="cardImage" src={imageUrl} alt={alt} />
            <span className="titleText">
                {title}
                <span className="desText">{description}</span>
            </span>
            
        </div>
    )
}

export default Card;