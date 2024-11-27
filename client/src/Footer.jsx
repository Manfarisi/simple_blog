import React from 'react';
import logo from './assets/logo.png'; 

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo dan Deskripsi Singkat */}
                <div className="footer-section">
                    <div className="footer-logo-container">
                        <img src={logo} alt="Logo" style={{ height: '6rem' }} />
                        <h2 className="footer-logo">Simple Blog</h2>
                    <p className="footer-description">
                        Simple Blog adalah platform untuk berbagi cerita dan ide Anda dengan dunia.
                    </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
