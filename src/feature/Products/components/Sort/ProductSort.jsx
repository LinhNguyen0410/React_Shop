import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
    conditionSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({ conditionSort, onChange }) {

    const handleSortChange = (e, newValue) => {
        if (onChange) {
            onChange(newValue)
        }
    }

    return (
        <Tabs value={conditionSort} aria-label="disabled tabs example" onChange={handleSortChange}>
            <Tab label="Giá thấp đến cao" value='salePrice:ASC' />
            <Tab label="Giá cao đến thấp " value='salePrice:DESC' />
            {/* value prescribed by back-end , we using this string value to call API */}
        </Tabs>
    );
}

export default ProductSort;