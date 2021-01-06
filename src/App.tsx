import React, {useState} from 'react';
import './App.css';
import {generatePassword} from './utilities';

function App() {
    const [passwordLength, setPasswordLength] = useState(0);
    const [password, setPassword] = useState("");

    function onChange(e: any){
        e.preventDefault();
        setPasswordLength(e.target.value);
    }
    function getPassword(){
        setPassword(generatePassword(passwordLength))
    }
    function handleCopy(e: any) {
        e.preventDefault();
        const textField = document.createElement('textarea');
        textField.innerText = password;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    }
    return (
        <div className="container App">
             <header>
                <h1 className="text-center mt-2">Password Generator</h1>
            </header>
            <div className="card shadow-sm p-3 mb-5 bg-white rounded generator">
            <div className="card-body">
                <h2 className="card-title">Generate a Password</h2>
                <div className="form-outline">
                    <input type="number" id="typeNumber" value={passwordLength} onChange={onChange} className="form-control border text-area" />
                    {/* <label className="form-label" htmlFor="typeNumber">Password Length</label> */}
                    <div className="form-notch-trailing"></div>
                </div>
                <button type="button" onClick={getPassword} className="btn btn-success generate" id="generate">Generate Password</button>
                {password.length > 0 ? 
                <div className="card-body">
                    <h5 className="card-title">{password}</h5>
                    <button type="button" className="btn btn-light clipboard" onClick={handleCopy}>Copy to clipboard</button>
                </div> 
                : ""
                }     
            </div>
            </div>
        </div>
    );
}

export default App;
