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
                    }}>default</Button>
                    <Button
                        type={1}
                        onClick={() => {
                        alert("Inverted Def. Button")
                    }}>inverted</Button>
                    <Button
                        type={2}
                        onClick={() => {
                        alert("Modified Button")
                    }}>modified</Button>
                    <Button
                        type={3}
                        onClick={() => {
                        alert("Outline Button")
                    }}>outline</Button>
                    <Button
                        type={4}
                        onClick={() => {
                        alert("Nav Button")
                    }}>nav</Button>
                    <Button
                        type={5}
                        onClick={() => {
                        alert("Clear Button")
                    }}>clear</Button>
                </div>
            </header>
        </div>
    );
}

export default App;
