import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import {Button} from './Button';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    itberries.pl buttons:
                </p>

                <div className="button--test">
                    <Button
                        type={0}
                        onClick={() => {
                        alert("Default Button")
                    }}>Default</Button>
                    <Button
                        type={1}
                        onClick={() => {
                        alert("Inverted Def. Button")
                    }}>Inverted</Button>
                    <Button
                        type={2}
                        onClick={() => {
                        alert("Modified Button")
                    }}>Modified</Button>
                    <Button
                        type={3}
                        onClick={() => {
                        alert("Outline Button")
                    }}>Outline</Button>
                    <Button
                        type={4}
                        onClick={() => {
                        alert("Nav Button")
                    }}>Nav</Button>
                    <Button
                        type={5}
                        onClick={() => {
                        alert("Clear Button")
                    }}>Clear</Button>
                </div>
            </header>
        </div>
    );
}

export default App;
