import React from 'react'
import TextField from '@material-ui/core/TextField';

export default ({
  input: { name, label, onChange, value, ...restInput },
  meta,
  ...rest
}) => (
  <TextField
    {...rest}
    name={name}
    margin={rest.margin}
    label={rest.placeholder}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    onChange={onChange}
    value={value}
    multiline={rest.multiline}
    rowsMax={rest.rows}
  />
)
