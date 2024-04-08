import logo from '../logo.svg';
import '../App.css';

export default function Exercise2() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" style={{ border: '3px solid #1b4d6d' }} />
                <p className="text1">This is the React logo!</p>
                <p className="text2">(I don't know why it is here either)</p>
                <p className="text3">The library for the web and native user interfaces</p>
            </header>
        </div>
    );
}