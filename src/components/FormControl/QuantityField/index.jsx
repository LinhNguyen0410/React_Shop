import { FormHelperText, IconButton } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { Box } from "@mui/system";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disable } = props;
  const { control, setValue } = form;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, error },
        }) => (
          <>
            <FormControl
              sx={{ position: "relative" }}
              error={invalid}
              fullWidth
              margin="normal"
              variant="outlined"
            >
              <InputLabel sx={{ position: "absolute", top: 0, left: "43px" }}>
                {label}
              </InputLabel>
              <Box>
                <IconButton
                  onClick={() =>
                    setValue(
                      name,
                      Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                    )
                  }
                >
                  <RemoveCircleOutlineOutlinedIcon />
                </IconButton>
                <OutlinedInput
                  sx={{ width: "160px", height: "40px" }}
                  error={invalid}
                  type="number"
                  label={label}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
                <IconButton
                  onClick={() =>
                    setValue(
                      name,
                      Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                    )
                  }
                >
                  <AddCircleOutlineOutlinedIcon />
                </IconButton>
              </Box>
            </FormControl>
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </>
        )}
      />
    </div>
  );
}

export default QuantityField;
