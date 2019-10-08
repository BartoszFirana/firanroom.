import React from 'react';

const Article = ({ title, image, author, date, text }) => {

    const shortText = text.slice(0, 100) + "...";

    return (
        <article className="blog__item">
            <div className="blog__item--header">
                <img src={image} alt={title} className="src" />
                <h2>{title}</h2>
            </div>
            <div className="blog__item--content">
                <p>{shortText}</p>
                <span>{author}</span>
                <span>{date}</span>
            </div>
            <button className="blog__item--button layout__button">read more...</button>
        </article>
    );
}

export default Article;