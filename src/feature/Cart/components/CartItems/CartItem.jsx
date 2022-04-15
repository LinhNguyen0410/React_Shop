import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { HOST } from "../../../../constant/hostURL";
import { formatPrice } from '../../../../utils/common';
import { removeFromCart } from "../../cartSlice";

CartItem.propTypes = {
    cartItem: PropTypes.object,
};

function CartItem({ cartItem = [] }) {
    const dispatch = useDispatch()

    const handleRemoveCartItem = (idNeedToRemove) => {
        dispatch(removeFromCart(idNeedToRemove))
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 0px",
                borderTop: "1px solid #ccc",
            }}
        >
            <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
                <img
                    src={
                        cartItem.productDetail.thumbnail?.url
                            ? `${HOST.BASE_URL}${cartItem.productDetail.thumbnail?.url}`
                            : HOST.PLACEHOLDER_IMAGE
                    }
                    alt={cartItem.productDetail.name}
                    style={{ width: "100px" }}
                />
                <Box
                    component="div"
                    sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                    <Box component="span" sx={{ fontWeight: "bold", fontSize: "23px" }}>
                        {formatPrice(cartItem.productDetail?.salePrice * cartItem.quantity) || 0}
                    </Box>
                    <Typography sx={{ fontSize: "17px" }}>
                        {cartItem.productDetail?.name}
                    </Typography>
                    <Box
                        component="div"
                        sx={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                            color: "gray",
                        }}
                    >
                        <Box component="span">{`Qty : ${cartItem.quantity}`}</Box>
                        <Box component="span">|</Box>
                        <Box component="span">{formatPrice(cartItem.productDetail?.salePrice) || 0}</Box>
                    </Box>
                </Box>
            </Box>

            <Button onClick={() => handleRemoveCartItem(cartItem.id)}>
                <CloseOutlinedIcon sx={{ color: "red" }} />
            </Button>
        </Box>
    );
}

export default CartItem;
