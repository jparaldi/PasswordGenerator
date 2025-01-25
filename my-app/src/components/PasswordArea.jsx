//Botão de copiar a senha
import React from 'react';
const PasswordArea = ({ password }) => {
    const handleCopyPassword = () => {
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                alert('PASSWORD COPIED');
            })
            .catch((err) =>{
                alert ('ERROR WHEN COPYING PASSWORD');
                console.error(err);
            });
        }
        else {
            alert ('NO PASSWORD TO COPY');
        }
    };

    return (
        <div>
            <input type="text" value={password} readOnly placeholder="Your Password will be here" />
            <button onClick={handleCopyPassword} style={{background: 'none', border : 'none', cursor: 'pointer'}}>
                <img src='aqui vai ficar o caminho pro ícone do Copy' alt='CopyButton'/>
            </button>
        </div>
    );
};

export default PasswordArea;
