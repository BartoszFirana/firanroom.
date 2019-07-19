import React from 'react';

const Article = ({ title, author, date, text }) => {
    const styles = {
        fontSize: 12,
        justifyContent: 'space-between',
        display: 'flex',
        padding: '10px 0',
    };
    const stylesArticle = {
        paddingBottom: '20px',
    };
    return (
        <article style={stylesArticle}>
            <h1>{title}</h1>
            <p>{text}</p>
            <div style={styles}>
                <span>{author}</span>
                <span>{date}</span>
            </div>
        </article>
    );
}

export default Article;