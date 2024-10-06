import React from 'react';
import './Footer.css'; 
import logo from './assets/WinniCode.png'; 


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo dan Deskripsi Singkat */}
                <div className="footer-section">
                    <h2 className="footer-logo"><img src={logo} alt="Logo" style={{ height: '70px' }} /></h2>
                    <p className="footer-description">
                        Simple Blog adalah platform untuk berbagi cerita dan ide Anda dengan dunia.
                    </p>
                </div>

                {/* Informasi Kontak */}
                <div className="footer-section">
                    <h3 className="footer-title">Kontak</h3>
                    <ul className="footer-contact">
                        <li>📧 kingmansalman@gmail.com</li>
                        <li>📞 +62 8311 5116 351</li>
                    </ul>
                </div>

                {/* Sosial Media */}
                <div className="footer-section">
                    <h3 className="footer-title">Ikuti Kami</h3>
                    <div className="footer-social">
                        <a href="https://facebook.com" className="footer-social-link" aria-label="Facebook">
                            {/* Icon Facebook */}
                            <svg className="footer-social-icon" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.675 0h-21.35C.595 0 0 .592 0 1.325v21.351C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.325-.592 1.325-1.324V1.325C24 .592 23.405 0 22.675 0z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com" className="footer-social-link" aria-label="Twitter">
                            {/* Icon Twitter */}
                            <svg className="footer-social-icon" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574A4.903 4.903 0 0 1 .964 9.1v.062a4.916 4.916 0 0 0 3.946 4.817 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.945 13.945 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634A10.012 10.012 0 0 0 24 4.557z"/>
                            </svg>
                        </a>
                        <a href="https://instagram.com" className="footer-social-link" aria-label="Instagram">
                            {/* Icon Instagram */}
                            <svg className="footer-social-icon" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608C4.52 2.5 5.787 2.225 7.153 2.163 8.419 2.105 8.799 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.07 5.775.128 4.653.403 3.678 1.378 2.703 2.353 2.428 3.475 2.37 4.752 2.313 6.032 2.3 6.441 2.3 12s.013 5.968.07 7.248c.058 1.277.333 2.399 1.308 3.374.975.975 2.097 1.25 3.374 1.308 1.28.058 1.689.07 7.248.07s5.968-.012 7.248-.07c1.277-.058 2.399-.333 3.374-1.308.975-.975 1.25-2.097 1.308-3.374.058-1.28.07-1.689.07-7.248s-.012-5.968-.07-7.248c-.058-1.277-.333-2.399-1.308-3.374C19.647.403 18.525.128 17.248.07 15.968.013 15.559 0 12 0z"/>
                                <path fill="currentColor" d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                                <circle fill="currentColor" cx="18.406" cy="5.594" r="1.44"/>
                            </svg>
                        </a>
                        {/* Tambahkan ikon sosial media lainnya jika diperlukan */}
                    </div>
                </div>
                </div>
            </footer>
        );
    }

