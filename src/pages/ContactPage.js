import React from 'react';
import '../styles/ContactPage.css';

class ContactPage extends React.Component {
    state = {
        value: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: ""
        })
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div className="web__container--notanim">
                <div className="web__container--about">
                    <h1>Check who I am</h1>
                    <p>Sprawdź czym się zajmuję. Koniecznie skontaktuj się ze mną, jeśli chciałbyś ze mną nawiązać współpracę.</p>
                </div>
                <div className="contact">
                    <section>
                        <div className="login__container layout__email">
                            <h3>Formularz kontaktowy</h3>
                            <from className="login__form">
                                <input className="layout__form--input" type="email" placeholder="e-mail@example.com" ></input>
                                <textarea className="layout__form--input layout__email" name="text" value={this.state.value} onChange={this.handleChange} placeholder="Napisz wiadomość..."></textarea>
                                <button class="layout__button">Wyślij</button>
                            </from >
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default ContactPage;