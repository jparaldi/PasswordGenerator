//Botão de copiar a senha
import React from 'react';
import copyIcon from '../assets/copy.png';
const PasswordArea = ({ password }) => {
    const handleCopyPassword = () => {
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
            })
            .catch((err) =>{
                alert ('ERROR WHEN COPYING PASSWORD');
                console.error(err);
            });
        }
    };

    return (
        <div>
            <input type="text" value={password} readOnly placeholder="Your Password will be here" />
            <button onClick={handleCopyPassword} style={{background: 'white', border : 'none', cursor: 'pointer', marginLeft: '20px'}}>
            <img  src={copyIcon} alt="Copy Button" style={{width: '40px', height: '40px', display: 'block' }} 
/>

            </button>
        </div>
    );
};

export default PasswordArea;