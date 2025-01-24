// Opçoes de personalização da senha:
//    Comprimento da senha (slider ou input).
//    Checkbox para incluir letras maiúsculas, minúsculas, números e símbolos.
//    Botão para gerar a senha.

import React from 'react';

const Form = ({ passwordOptions, setPasswordOptions, handleGeneratePassword }) => {
    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;
        if (type === 'checkbox') {
            setPasswordOptions({
                ...passwordOptions,
                [name]: checked,
            });
        } else {
            setPasswordOptions({
                ...passwordOptions,
                [name]: value,
            });
        }
    };

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <label>
                Password Length
                <input
                    type="number"
                    name="length"
                    value={passwordOptions.length}
                    onChange={handleChange}
                    min={4}
                    max={20}
                />
            </label>
            <label>
                Include Uppercase Letters
                <input
                    type="checkbox"
                    name="hasUpper"
                    checked={passwordOptions.hasUpper}
                    onChange={handleChange}
                />
            </label>
            <label>
                Include Lowercase Letters
                <input
                    type="checkbox"
                    name="hasLower"
                    checked={passwordOptions.hasLower}
                    onChange={handleChange}
                />
            </label>
            <label>
                Include Numbers
                <input
                    type="checkbox"
                    name="hasNumber"
                    checked={passwordOptions.hasNumber}
                    onChange={handleChange}
                />
            </label>
            <label>
                Include Symbols
                <input
                    type="checkbox"
                    name="hasSymbols"
                    checked={passwordOptions.hasSymbols}
                    onChange={handleChange}
                />
            </label>
            <button onClick={handleGeneratePassword}>Generate Password</button>
        </form>
    );
};

export default Form;
