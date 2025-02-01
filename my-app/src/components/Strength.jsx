// Indica a força da senha gerada
import React from 'react';

const Strength = ({ password }) => {
    const getStrength = (password) => {
        let IntStrength = 0;

        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[\W_]/.test(password);

        if (hasUpper) IntStrength += 7;
        if (hasLower) IntStrength += 7;
        if (hasNumber) IntStrength += 5;
        if (hasSymbol) IntStrength += 5;

        IntStrength += (1.1) * password.length;

        if (IntStrength >= 37) return { level: 'STRONG', bars: 4, color: '#75FB4C' };
        else if (IntStrength >= 30) return { level: 'MEDIUM', bars: 3, color: '#FFCC00' };
        else if (IntStrength >= 20) return { level: 'WEAK', bars: 2, color: '#FF6600' };
        return { level: 'TOO WEAK', bars: 1, color: '#FF1e00' };
    };

    const Strength = getStrength(password);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', fontSize: '18px'}}>
            <p>Strength: {Strength.level}</p>
            <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: 4 }, (_, index) => (
                    <div
                        key={index}
                        style={{
                            color: 'white',
                            width: '10px',
                            height: '20px',
                            backgroundColor: index < Strength.bars ? Strength.color : '#333',
                            border: '1px solid #000',
                        }}
                        >
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Strength;