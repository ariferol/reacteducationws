import React from 'react';
import PropTypes from 'prop-types';

const Kisi = ({ firstname, lastname, age, deleteKisi }) => {
    return (
        <li>
            <div>
                <span>{firstname}</span>
                <span>{lastname}</span>
                <span>{age}</span>
                <button type="button" onClick={() => deleteKisi(firstname)}>Sil</button>
            </div>
        </li>
    );
};

Kisi.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

Kisi.defaultProps = {
    firstname: '{firstname}',
    lastname: '{lastname}',
    age: 18
};

export default Kisi;