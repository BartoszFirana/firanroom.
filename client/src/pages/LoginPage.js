import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
    return (
        <>
            <div className="web__container--notanim">
                <div className="login__container login__container--width">
                    <h3>Zaloguj się</h3>
                    <form className="login__form">
                        <input className="layout__form--input" type="text" placeholder="login" ></input>
                        <input className="layout__form--input" type="password" placeholder="hasło" ></input>
                        <button className="layout__button">Zaloguj</button>
                    </form >
                    <div className="signin__">
                        <a href="/auth/google" className="signin__button">Sign In wi th Google</a>
                    </div>
                </div>
            </div >
        </>
    );
}

export default LoginPage;