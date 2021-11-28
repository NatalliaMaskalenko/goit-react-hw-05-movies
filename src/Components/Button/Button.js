import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ onClick }) {
     return (
        <button className={s.button} type="button" onClick={onClick}>Go back</button>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func,
};
