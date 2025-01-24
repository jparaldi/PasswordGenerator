import React, { useState } from "react";
import './App.css';
import { generatePassword } from './utils/PasswordUtils';
import PasswordArea from './components/PasswordArea';
import Form from './components/Form';
import Strength from './components/Strength';

const App = () => {
    const [password, setPassword] = useState('');
    const [passwordOptions, setPasswordOptions] = useState({
        length: 10,
        hasUpper: true,
        hasLower: true,
        hasNumber: true,
        hasSymbols: true
    });

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(passwordOptions); 
        console.log(newPassword);  
        setPassword(newPassword); 
    };

    return (
        <div className="App">
            <h1>Password Generator</h1>
            <PasswordArea password={password} />
            <Form 
                passwordOptions={passwordOptions} 
                setPasswordOptions={setPasswordOptions} 
                handleGeneratePassword={handleGeneratePassword} 
            />
            <Strength password={password} />
        </div>
    );
};

export default App;
