import React from 'react';
import PropTypes from 'prop-types';

ChiTiet.propTypes = {
    chitiet: PropTypes.isRequired,
};

function ChiTiet({chitiet}) {
    return (
        <ul>
            
                <li>{chitiet.title}</li>
            
        </ul>
    );
}

export default ChiTiet;