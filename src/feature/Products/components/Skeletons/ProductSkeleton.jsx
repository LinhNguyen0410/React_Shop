import { Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";

ProductSkeleton.propTypes = {
    // count skeleton want showing......
    lengthSkeleton: PropTypes.number,
};

ProductSkeleton.defaultProps = {
    lengthSkeleton: 12,
};

function ProductSkeleton(props) {
    const { lengthSkeleton } = props;
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(lengthSkeleton)).map((x, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Box padding={1}>
                            <Skeleton variant="rectangular" width="100%" height={175} />
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductSkeleton;
