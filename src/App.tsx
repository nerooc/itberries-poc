import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './Button';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit
                    <code>src/App.tsx</code>
                    and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
                <div className="button--test">
                    <Button
                        type={0}
                        onClick={() => {
                        alert("test message")
                    }}>TEST BUTTON DEFAULT</Button>
                    <Button
                        type={1}
                        onClick={() => {
                        alert("test message")
                    }}>TEST BUTTON INVERTED</Button>
                    <Button
                        type={2}
                        onClick={() => {
                        alert("test message")
                    }}>TEST BUTTON MODIFIED</Button>
                    <Button
                        type={3}
                        onClick={() => {
                        alert("test message")
                    }}>TEST BUTTON OUTLINE</Button>
                    <Button
                        type={4}
                        onClick={() => {
                        alert("test message")
                    }}>TEST BUTTON NAV</Button>
                    <Button
                        type={5}
                        onClick={() => {
                        alert("test message")
                    }}>TEST BUTTON CLEAR</Button>
                </div>
            </header>
        </div>
    );
}

export default App;
