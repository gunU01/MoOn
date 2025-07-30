// src/components/Card.jsx
import React from 'react';

const MAX_TITLE_LENGTH = 17; // 제목 최대 길이
const MAX_DESCRIPTION_LENGTH = 100; // 설명 최대 길이

const truncateText = (text, maxLength) => {
    if (!text) return ''; // 텍스트가 없으면 빈 문자열 반환
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};

const Card = ({ title, description, imageUrl, alt }) => {
    const truncatedTitle = truncateText(title, MAX_TITLE_LENGTH);
    const truncatedDescription = truncateText(description, MAX_DESCRIPTION_LENGTH);

    return (
        <div className="cardContainer">
            <div className="cardImageWrapper">
                <img className="cardImage" src={imageUrl} alt={alt} />
            </div>
            <div className="cardContent">
                <div className="titleText">{truncatedTitle}</div>
                <div className="desText">{truncatedDescription}</div>
            </div>
        </div>
    );
}

export default Card;