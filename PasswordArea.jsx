import React from 'react';
import './styles.css';

const PasswordArea = ({ password }) => {
    const handleCopyPassword = () => {
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
            }).catch((err) => {
                alert('ERROR WHEN COPYING PASSWORD');
                console.error(err);
            });
        }
    };

    return (
        <div className="password-area">
            <input
                type="text"
                value={password}
                readOnly
                placeholder="Your Password will be here"
                className="password-input"
            />
            <button
                onClick={handleCopyPassword}
                className="copy-button"
                aria-label="Copy password"
            >
                <span className="material-icons">content_copy</span>
            </button>
        </div>
    );
};

export default PasswordArea;
