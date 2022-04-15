import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import FilterByServices from "./FilterByServices";
import Banner from "../../../../components/Banner/Banner";

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
    const handleCategoryChange = (newCategoryId) => {
        const newFilters = {
            ...filters,
            'category.id': newCategoryId
        }
        if (onChange) onChange(newFilters)
    };

    const handlePriceChange = (values) => {
        const newPriceChange = {
            ...filters,
            ...values
        }
        if (onChange) onChange(newPriceChange)
    }

    const handleServiceChange = (service) => {
        const newServiceChange = {
            ...filters,
            ...service
        }
        if (onChange) onChange(newServiceChange)
    }

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <Divider />
            <FilterByPrice onChange={handlePriceChange} />
            <Divider />
            <FilterByServices filters={filters} onChange={handleServiceChange} />
            <Banner />
        </Box>
    );
}

export default ProductFilters;
