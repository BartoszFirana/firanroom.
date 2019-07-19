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
            <div className="contact">
                <aside>adasd</aside>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Napisz do mnie</h3>
                        <textarea value={this.state.value} onChange={this.handleChange} placeholder="Napisz wiadomość..."></textarea>
                        <button>Wyślij</button>
                    </form>
                </section>
            </div>
        )
    }
}
export default ContactPage;