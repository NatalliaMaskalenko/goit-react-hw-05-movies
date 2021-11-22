import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default function Modal({onClose, children }) {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.addEventListener('keydown', handleKeyDown);
        }
    }
    );

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose()
        }
    }

     return createPortal(
            <div className="Overlay" onClick={onClose}>
                <div className="Modal">
                    {/* <img src="" alt="" /> */}
                    {children}
                </div>
            </div>,
            document.getElementById('modalRoot')
        );
};

Modal.propTypes = {
    onClose: PropTypes.func,  
};
