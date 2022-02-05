import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


SearchFilters.propTypes = {

};

function SearchFilters(props) {

    const [valueSearch, setValueSearch] = useState('')

    const handleSearch = (e) => {
        console.log(e.target.value);
        setValueSearch(e.target.value)
    }

    return (
        <Box sx={{ display: "flex", width: "60%", ml: 10 }}>
            <TextField
                size="small"
                color="primary"
                variant="outlined"
                placeholder="Tìm sản phẩm,danh mục mong muốn..."
                value={valueSearch}
                onChange={handleSearch}
                sx={{
                    backgroundColor: "white",
                    width: "100%",
                    overflow: "hidden",
                }}
            />

            <Button
                sx={{
                    width: "150px",
                    outline: "none",
                    backgroundColor: "#0d5cb6",
                }}
                variant="contained"
                startIcon={<SearchOutlinedIcon />}
            >
                Tìm Kiếm
            </Button>
        </Box>
    );
}

export default SearchFilters;