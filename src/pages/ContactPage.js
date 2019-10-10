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
                        <form onSubmit={this.handleSubmit}>
                            <h3>Napisz do mnie</h3>
                            <textarea value={this.state.value} onChange={this.handleChange} placeholder="Napisz wiadomość..."></textarea>
                            <button>Wyślij</button>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}
export default ContactPage;