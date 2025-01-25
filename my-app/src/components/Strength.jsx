//Indica a força da senha gerada
import React from 'react';
const Strength = ({ password }) => {
    const getStrength = (password) => {

        let IntStrength = 0;

        if (options.hasUpper){
            IntStrength += 6;
        }
        if (options.hasLower){
            IntStrength += 6;
        }
        if (options.hasNumber){
            IntStrength += 3;
        }
        if (options.hasSymbols){
            IntStrength += 3;
        }

        IntStrength += PWlength;

        if (IntStrength >= ){
            return 'Strong';
        }

        else if (IntStrength > ){
            return 'MEDIUM';
        }

        else if (IntStrength > ){
            return 'WEAK';
        }

        else {
            return 'TOO WEAK!'
        }
    };
    return (
        <div>
            <p>Strength: {getStrength(password)}</p>
        </div>
    );
};

export default Strength;
