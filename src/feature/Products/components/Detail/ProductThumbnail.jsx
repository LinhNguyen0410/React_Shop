import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import { HOST } from "../../../../constant/hostURL";

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product = {} }) {
    const thumbnailUrl = product.thumbnail
        ? `${HOST.BASE_URL}${product.thumbnail?.url}`
        : HOST.PLACEHOLDER_IMAGE;

    return (
        <Box
            minHeight="200px"
            sx={{
                cursor: "pointer",
                "&:hover": {
                    transform: "scale(1.01)",
                },
            }}
            padding={1}
        >
            <img width="100%" src={thumbnailUrl} alt={product.name} />
        </Box>
    );
}

export default ProductThumbnail;
