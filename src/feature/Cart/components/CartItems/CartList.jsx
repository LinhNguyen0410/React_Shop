import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import CartItem from "./CartItem";

CartList.propTypes = {
    cartList: PropTypes.array,
};

function CartList({ cartList = [] }) {

    return (
        <Box
            component="ul"
            sx={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                mt: 3,
            }}
        >
            {cartList.map((cartItem) => (
                <li key={cartItem.id}>
                    <CartItem cartItem={cartItem} />
                </li>
            ))}
        </Box>
    );
}

export default CartList;
