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

        if (IntStrength >= 37) return { level: 'STRONG', bars: 4 };
        if (IntStrength >= 30) return { level: 'MEDIUM', bars: 3 };
        if (IntStrength >= 20) return { level: 'WEAK', bars: 2 };
        return { level: 'TOO WEAK', bars: 1};
    };

    const strength = getStrength(password);

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <p>Strength: {strength.level}</p>
            <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: 4 }, (_, index) => (
                    <div
                        key={index}
                        style={{
                            width: '10px',
                            height: '20px',
                            backgroundColor: index < strength.bars ? '#75FB4C' : '#333',
                            border: '1px solid #666',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Strength;
