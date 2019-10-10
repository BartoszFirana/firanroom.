import React from 'react';

const Article = ({ title, image, author, avatar, date, text }) => {

    const shortText = text.slice(0, 100) + "...";

    return (
        <article className="blog__item">
            <div className="blog__item--container">
                <div className="blog__item--header">
                    <img src={image} alt={title} className="src" />
                </div>
                <div className="blog__item--info">
                    <img src={avatar} alt={author} />
                </div>
                <div className="blog__item--content">
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                </div>
                <button className="blog__item--button layout__button">read more...</button>
            </div>
        </article>
    );
}

export default Article;