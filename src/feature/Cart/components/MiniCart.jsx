import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMiniCart } from "../cartSlice";
import MiniCartItems from "./MiniCartItems/MiniCartItems";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { cartItemCount, cartItemTotal } from "../selectors";
import { formatPrice } from "../../../utils/common";
import { useLocation, useNavigate, useParams } from "react-router-dom";

MiniCart.propTypes = {};

function MiniCart(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let miniCartStatus = useSelector((state) => state.cart.showMiniCart);
    const cartList = useSelector((state) => state.cart.cartItems);
    const cartQuantity = useSelector(cartItemCount);
    const cartTotal = useSelector(cartItemTotal);
    const cartWithoutProduct = cartList.length === 0;

    const handleCloseMiniCart = () => {
        dispatch(hideMiniCart());
    };

    const handleNavigateToCartDetail = () => {
        navigate({
            pathname: 'cart',
        });
        dispatch(hideMiniCart())
    }
    return (
        <>
            {miniCartStatus && (
                <>
                    {!cartWithoutProduct ? (
                        // Cart has products
                        <Box
                            sx={{
                                position: "absolute",
                                right: 0,
                                top: "53px",
                                width: "600px",
                                height: "auto",
                                backgroundColor: "#fff",
                                boxShadow: "1px 2px 3px #ccc",
                                borderRadius: "10px",
                                zIndex: 11,
                                border: "5px solid #ccc",
                            }}
                        >
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    mt: 1,
                                    fontWeight: "bold",
                                    color: "#1976D2",
                                    textTransform: "uppercase",
                                }}
                            >
                                Giỏ Hàng Của Bạn
                            </Typography>

                            <Typography
                                sx={{
                                    ml: 1,
                                    color: "gray",
                                    fontSize: "14px",
                                }}
                            >
                                {`Đang có ${cartQuantity} sản phẩm 🛒`}
                            </Typography>

                            <MiniCartItems cartList={cartList} />

                            <Button
                                sx={{ float: "right", position: "absolute", top: 0, right: 0 }}
                                onClick={handleCloseMiniCart}
                            >
                                <CloseOutlinedIcon />
                            </Button>

                            <Box
                                sx={{
                                    color: "#000",
                                    marginTop: "10px",
                                    mr: 1,
                                    paddingBottom: "10px",
                                    color: "green",
                                    fontWeight: "bold",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                }}
                            >
                                <Box component="span">
                                    {`Tổng cộng: ${formatPrice(cartTotal)}`}
                                </Box>
                                <Button onClick={handleNavigateToCartDetail}>Chi tiết giỏ hàng</Button>
                            </Box>
                        </Box>
                    ) : (
                        // Cart without product
                        <Box
                            sx={{
                                position: "absolute",
                                right: 0,
                                top: "53px",
                                width: "400px",
                                height: "300px",
                                padding: "10px 60px",
                                backgroundColor: "#fff",
                                boxShadow: "1px 2px 3px #ccc",
                                borderRadius: "10px",
                                zIndex: 11,
                                border: "5px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                style={{ width: "250px" }}
                                src="https://www.rypen.com/assets/images/cart-empty.svg"
                                alt=""
                            />
                            <Button
                                sx={{ position: "absolute", top: 0, right: 0 }}
                                onClick={handleCloseMiniCart}
                            >
                                <CloseOutlinedIcon />
                            </Button>
                        </Box>
                    )}
                </>
            )}
        </>
    );
}

export default MiniCart;
