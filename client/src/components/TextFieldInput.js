import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

TextFieldInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeHolder: PropTypes.string,
};

function TextFieldInput(props) {
    return (
            console.log(props),
            <TextField {...props} size='large' />
      
    );
}

export default TextFieldInput;