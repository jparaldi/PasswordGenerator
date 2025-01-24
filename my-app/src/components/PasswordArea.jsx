//Mostra a senha Gerada
//Botão de copiar a senha


import React from 'react';

const PasswordArea = ({ password }) => {
    console.log(password);
    return (
        <div>
            <input type="text" value={password} readOnly placeholder="Your Password will be here" />
        </div>
    );
};

//IMPLEMENTAR O BOTÃO DE COPIAR A SENHA

export default PasswordArea;
