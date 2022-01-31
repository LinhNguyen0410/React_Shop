import React, { useState } from "react";
import PropTypes from "prop-types";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography } from "@mui/material";

FilterByServices.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterByServices({ onChange = null, filters = {} }) {
    const handleServiceChange = (e) => {
        const isChecked = { [e.target.name]: e.target.checked }
        if (onChange) onChange(isChecked)
    }

    return (
        <>
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    pt: 2,
                }}
            >
                Dịch Vụ
            </Typography>
            <Box sx={{ mt: 1, display: "flex", justifyContent: "center" }}>
                <FormGroup>
                    <FormControlLabel
                        checked={!!filters.isFreeShip}
                        control={<Checkbox />}
                        label="Free Ship"
                        onChange={handleServiceChange}
                        name='isFreeShip'
                    />
                    <FormControlLabel
                        checked={!!filters.isPromotion}
                        control={<Checkbox />}
                        label="Promotion"
                        onChange={handleServiceChange}
                        name='isPromotion'
                    />
                </FormGroup>
            </Box>
        </>
    );
}

export default FilterByServices;
