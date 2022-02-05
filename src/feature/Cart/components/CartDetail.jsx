import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import CartList from "./CartItems/CartList";
import CheckOut from "./CartItems/CheckOut";
import { useSelector } from "react-redux";
import { cartItemCount } from "../selectors";

function CartDetail(props) {
    const cartState = useSelector((state) => state.cart.cartItems);
    const quantity = useSelector(cartItemCount)

    return (
        <Box>
            <Container>
                <Grid container spacing={1} sx={{ mt: 3 }}>
                    <Grid item sx={{ flex: 1 }}>
                        <Paper sx={{ p: 2 }} variant="outlined" square>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    GIỎ HÀNG CỦA TÔI
                                </Typography>
                                <Box component="span">{`Giỏ hàng của bạn đang có ${quantity || 0} sản phẩm`}</Box>
                            </Box>

                            <CartList cartList={cartState} />

                        </Paper>
                    </Grid>
                    <Grid item sx={{ width: "400px" }}>
                        <Paper sx={{ p: 2 }} variant="outlined" square>

                            <CheckOut cartList={cartState} />

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default CartDetail;
