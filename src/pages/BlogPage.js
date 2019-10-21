import React from 'react';
import Article from '../components/Article';
import '../styles/BlogPage.css';

const articles = [
    {
        id: 1,
        date: '07-07-2019',
        author: 'Firana',
        avatar: 'https://i.imgur.com/JS4xM7y.jpg',
        image: '/static/media/.svg',
        title: 'Moje pierwsze kroki z React',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 2,
        date: '09-07-2019',
        author: 'Andrzej',
        avatar: 'https://i.imgur.com/JS4xM7y.jpg',
        image: '/static/media/.svg',
        title: 'Testy na blogu',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 3,
        date: '10-07-2019',
        author: 'Firana',
        avatar: 'https://i.imgur.com/JS4xM7y.jpg',
        image: '/static/media/.svg',
        title: 'Wypełnianie witryny',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 4,
        date: '07-07-2019',
        author: 'Firana',
        avatar: 'https://i.imgur.com/JS4xM7y.jpg',
        image: '/static/media/.svg',
        title: 'Moje pierwsze kroki z React',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 5,
        date: '09-07-2019',
        author: 'Andrzej',
        avatar: 'https://i.imgur.com/JS4xM7y.jpg',
        image: '/static/media/.svg',
        title: 'Testy na blogu',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 6,
        date: '10-07-2019',
        author: 'Firana',
        avatar: 'https://i.imgur.com/JS4xM7y.jpg',
        image: '/static/media/.svg',
        title: 'Wypełnianie witryny',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 8,
        date: '09-07-2019',
        author: 'Andrzej',
        avatar: 'https://i.imgur.com/JS4xM7y.jpg',
        image: '/static/media/.svg',
        title: 'Testy na blogu',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 9,
        date: '10-07-2019',
        author: 'Firana',
        avatar: 'https://i.imgur.com/JS4xM7y.jpg',
        image: '/static/media/.svg',
        title: 'Wypełnianie witryny',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
]

const BlogPage = () => {

    const articlesList = articles.map(article => (
        <Article key={article.id} {...article} />
    ));

    return (
        <>
            <div className="web__container--notanim">
                <div className="web__container--about">
                    <h2>Follow my blog</h2>
                    <p>Zaglądaj na mojego bloga i śledź mój rozwój. Kto wie, może moje wpisy zainspirują Cię do czegoś.</p>
                </div>
                <section className="blog__container">
                    {articlesList}
                </section>
            </div>
        </>
    )
}

export default BlogPage;