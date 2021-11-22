import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default class Modal extends Component{

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }

    render() {
        return createPortal(
            <div className="Overlay" onClick={this.props.onClose}>
                <div className="Modal">
                    {/* <img src="" alt="" /> */}
                    {this.props.children}
                </div>
            </div>,
            document.getElementById('modalRoot')
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func,  
};
