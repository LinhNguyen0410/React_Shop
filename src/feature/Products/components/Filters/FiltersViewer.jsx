import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Chip, Stack } from "@mui/material";

FiltersViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => "TiKi Now 💯",
        isActive: () => true,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => { },
        onToggle: (filters) => {
            return filters;
        },
    },
    {
        id: 2,
        getLabel: (filters) => "Giao hàng miễn phí 🚚",
        isActive: (filters) => filters.isFreeShip,
        isVisible: (filters) => true,
        isRemovable: false,
        onRemove: () => { },
        onToggle: (filters) => {
            const newFilters = { ...filters };
            if (filters.isFreeShip) {
                delete newFilters.isFreeShip
            } else {
                newFilters.isFreeShip = true;
            }
            return newFilters;
        },
    },

    {
        id: 3,
        getLabel: (filters) => {
            const price_gte = filters.salePrice_gte.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
            });
            const price_lte = filters.salePrice_lte.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
            });
            const salePrice = filters.salePrice_gte === 5000000 ? `Trên ${price_gte}` : `Từ ${price_gte} đến ${price_lte}`

            return salePrice
        },
        isActive: (filters) => true,
        isVisible: (filters) =>
            Object.keys(filters).includes("salePrice_gte") &&
            Object.keys(filters).includes("salePrice_lte"),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.salePrice_gte;
            delete newFilters.salePrice_lte;
            return newFilters;
        },
        onToggle: () => { },
    },
    {
        id: 4,
        getLabel: (filters) => "Có khuyến mãi 🥳",
        isActive: (filters) => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.isPromotion
            return newFilters;
        },
        onToggle: () => { },
    },
];

function FiltersViewer({ filters = {}, onChange = null }) {

    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter((x) => x.isVisible(filters))
    }, [filters])
    // this component only calculate again when object filters change....Optimal perfomance
    return (
        <Box
            component="ul"
            sx={{ display: "frex", listStyle: "none", gap: "10px" }}
        >
            {visibleFilters.map((x) => (
                <li key={x.id}>
                    <Chip
                        variant="outlined"
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? "primary" : "default"}
                        clickable={!x.isRemovable}
                        onClick={
                            x.isRemovable
                                ? null
                                : () => {
                                    if (!onChange) return;
                                    const newFilters = x.onToggle(filters);
                                    onChange(newFilters);
                                }
                        }
                        onDelete={
                            x.isRemovable
                                ? () => {
                                    if (!onChange) return;
                                    const newFilters = x.onRemove(filters);
                                    onChange(newFilters);
                                }
                                : null
                        }
                    />
                </li>
            ))}
        </Box>
    );
}

export default FiltersViewer;
