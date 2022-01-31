import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
    const [valuePrice, setValuePrice] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });
    const [tagPriceValue, setTagPriceValue] = useState([
        "Dưới 100.000",
        "Từ 100.000 đến 1.000.000",
        "Từ 1.000.000 đến 5.000.000",
        "Trên 5.000.000",
    ]);

    // event

    const handleInputPriceChange = (e) => {
        setValuePrice((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitPrice = () => {
        if (onChange) onChange(valuePrice);
    };

    const handleTagPriceClick = (id) => {
        let newValueTag = {
            salePrice_gte: 0,
            salePrice_lte: 0,
        }
        if (id === 0) {
            newValueTag.salePrice_gte = 0
            newValueTag.salePrice_lte = 100000
        }
        if (id === 1) {
            newValueTag.salePrice_gte = 100000
            newValueTag.salePrice_lte = 1000000
        }
        if (id === 2) {
            newValueTag.salePrice_gte = 1000000
            newValueTag.salePrice_lte = 5000000
        }
        if (id === 3) {
            newValueTag.salePrice_gte = 5000000
            newValueTag.salePrice_lte = 50000000000
        }
        if (onChange) onChange(newValueTag);
    }
    return (
        <Box>
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    pt: 2,
                }}
            >
                Lọc Theo Giá
            </Typography>
            <Box>
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "10px",
                    }}
                >
                    {tagPriceValue.map((tag, index) => (
                        <li
                            style={{
                                backgroundColor: "#ccc",
                                padding: "3px 8px",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                            key={index}
                            onClick={() => handleTagPriceClick(index)}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </Box>

            <Box sx={{ display: "flex", p: 2, gap: "5px", alignItems: "center" }}>
                <TextField
                    size="small"
                    name="salePrice_gte"
                    type="number"
                    value={valuePrice.salePrice_gte}
                    onChange={handleInputPriceChange}
                ></TextField>

                <span>-</span>
                <TextField
                    size="small"
                    name="salePrice_lte"
                    type="number"
                    value={valuePrice.salePrice_lte}
                    onChange={handleInputPriceChange}
                ></TextField>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
                <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={handleSubmitPrice}
                >
                    Áp dụng
                </Button>
            </Box>
        </Box>
    );
}

export default FilterByPrice;
