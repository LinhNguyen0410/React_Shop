import { Box, Chip, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { HOST } from "../../../../constant/hostURL";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

Product.propTypes = {
    product: PropTypes.object,
};
function Product({ product = {}, filters = {} }) {
    const thumbnailUrl = product.thumbnail
        ? `${HOST.BASE_URL}${product.thumbnail?.url}`
        : HOST.PLACEHOLDER_IMAGE;

    const productPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(product.salePrice);

    const promotionPercent =
        product.promotionPercent === 0 ? "" : ` -${product.promotionPercent}%`;
    return (
        <div>
            <Box sx={{ position: "relative" }} padding={1}>
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

                <Typography
                    sx={{
                        textTransform: "capitalize",
                        cursor: "pointer",
                        transition: "all .1s linear",
                        "&:hover": {
                            color: "orange",
                            fontWeight: "500",
                        },
                    }}
                    variant="body3"
                >
                    {product.name}
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                    <Typography sx={{ fontWeight: "bold" }} variant="body2">
                        {productPrice}
                    </Typography>
                    <Typography
                        sx={{ backgroundColor: "#76EEC6", borderRadius: "5px" }}
                        variant="body2"
                    >
                        {promotionPercent}
                    </Typography>
                </Box>

                <Box
                    sx={{ display: "flex", gap: "10px", justifyContent: "space-between" }}
                >
                    <Stack spacing={1}>
                        <Rating name="size-small" defaultValue={4} size="small" />
                    </Stack>
                    <Typography
                        sx={{ backgroundColor: "#669999", color: "white", padding: "3px" }}
                        fontSize="10px"
                    >
                        {product.category.name}
                    </Typography>
                </Box>

                {/* tag freeship */}
                {product.isFreeShip &&
                    <Chip
                        sx={{ position: "absolute", top: "10px", right: "0" }}
                        size="small"
                        label="🚚"
                    />}
            </Box>
        </div>
    );
}

export default Product;
