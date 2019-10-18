import React from 'react';

const AdminPanel = () => {
    return (
        <>
            <div className="web__container--notanim">
                <div className="web__container--about">
                    <h1>Witaj w panelu administratora</h1>
                    <p>W tym miejscu będzies mógł dodawać i modyfikować wpisy zamieszczone na blogu.</p>
                </div>
                <div className="login__container layout__email">
                    <h3>Edytor wiadomości</h3>
                    <from className="login__form">
                        <input className="layout__form--input" type="text" placeholder="Title" ></input>
                        <textarea className="layout__form--input layout__email" name="text" /* value={this.state.value} onChange={this.handleChange} */ placeholder="Content of your post"></textarea>
                        <button class="layout__button">Wyślij</button>
                    </from >
                </div>
            </div>
        </>
    );
}

export default AdminPanel;