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
        <div className='password-area'>
            <input type="text" value={password} readOnly placeholder="Your Password will be here" className='password-input' />
            <button onClick={handleCopyPassword} className='copy-button' >
            <img  src={copyIcon} alt="Copy Button" style={{ width: '45px', height: '45px'}}/>
            </button>
        </div>
    );
};

export default PasswordArea;