import PropTypes from 'prop-types';

export default function Button({ handleClick }) {
     return (
        <button className="Button" type="button" onClick={(handleClick)}>Load more</button>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func,
};
