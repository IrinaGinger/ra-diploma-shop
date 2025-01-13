import PropTypes from 'prop-types'; 

// вывод сообщения
export function Alert({ type, text }) {
    return (
        <div className={`alert text-center alert-${type}`} role="alert">
            {text}
        </div>
    );
}

Alert.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
}