import { Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import Product from "./Product";

ProductList.propTypes = {
    product_data: PropTypes.array,
};

function ProductList({ product_data = [] }) {
    return (
        <Box>
            <Grid container>
                {product_data.map((product, index) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Box padding={1}>
                            {/* Render component Product */}
                            <Product product={product} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;
