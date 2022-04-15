import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Box, Rating, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { formatPrice, formatPromotionPercent } from "../../../../utils";

ProductInfo.propTypes = {
    product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
    return (
        <Box>
            <Box sx={{ display: "flex", gap: "8px" }}>
                <Typography>{`Mặt hàng:`}</Typography>
                <Typography sx={{ color: "#008080", textDecoration: "underline" }}>
                    {product.category?.name}
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ fontSize: "35px" }}>{product.name}</Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    minHeight: "80px",
                    backgroundImage: "linear-gradient(to right, #0066CC , #fff)",
                    margin: "20px auto",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <Typography
                    sx={{ fontSize: "30px", ml: 2, fontWeight: "bold", color: "#fff" }}
                >
                    {formatPrice(product.salePrice)}
                </Typography>
                <Box sx={{ ml: 2, display: "flex", gap: "10px", alignItems: "center" }}>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "#fff",
                            textDecoration: "line-through",
                            opacity: "0.7",
                        }}
                    >
                        {formatPrice(product.originalPrice)}
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                        {formatPromotionPercent(product.promotionPercent)}
                    </Typography>
                </Box>
            </Box>
            {product.isFreeShip && (
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <Typography
                        sx={{ fontSize: "20px", textShadow: "0px 1px 1px #6699CC" }}
                    >
                        TiKi FreeShip 💯 -
                    </Typography>
                    <Typography sx={{ lineHeight: "32px" }}>
                        Kết thúc sau : 01 : 20 : 12
                    </Typography>
                </Box>
            )}
            <Box
                component="span"
                sx={{
                    textTransform: "uppercase",
                    color: "red",
                    fontWeight: "bolder",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                }}
            >
                <MonetizationOnOutlinedIcon /> Rẻ hơn hoàn tiền{" "}
                <ContactSupportOutlinedIcon sx={{ color: "black", fontSize: "13px" }} />
            </Box>
            <Stack spacing={1}>
                <Rating name="size-small" defaultValue={4} size="small" />
            </Stack>
            <Box component="p">{`Mô tả : ${product.shortDescription}...`}</Box>
        </Box>
    );
}

export default ProductInfo;
