import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
    return (
        <>
            <div className="web__container--notanim">
                <div className="login__container">
                    <h3>Zaloguj się</h3>
                    <from className="login__form">
                        <input className="layout__form--input" type="text" placeholder="login" ></input>
                        <input className="layout__form--input" type="password" placeholder="hasło" ></input>
                        <button class="layout__button">Zaloguj</button>
                    </from >
                </div>
            </div >
        </>
    );
}

export default LoginPage;