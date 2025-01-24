//Indica a força da senha gerada

import React from 'react';

const Strength = ({ password }) => {
    const getStrength = (password) => {
        //IMPLEMENTAR LOGICA DE AVALIAR SENHA
    };

    return (
        <div>
            <p>Strength: {getStrength(password)}</p>
        </div>
    );
};

export default Strength;
