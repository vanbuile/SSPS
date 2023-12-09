import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function TextFieldInput(props) {
  const prop = props;
  const width = props.width;
  return (
    <Controller
      name={prop.name}
      control={prop.form.control}
      render={({ field }) => (
        <TextField
          fullWidth
          label={prop.label}
          margin="normal"
          variant="outlined"
          style={{ width: width }}
          type={prop.type}
          InputProps={{
            inputProps: {
              min: 10,
            },
          }}
          helperText={prop.helperText}
          disabled={prop.disabled}
          {...field}
        />
      )}
    />
  );
}

export default TextFieldInput;
