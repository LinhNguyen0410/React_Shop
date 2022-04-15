import { Box, Button, Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../../../utils/common";
import { cartItemTotal } from "../../selectors";

CheckOut.propTypes = {
    cartList: PropTypes.array,
};

function CheckOut({ cartList = [] }) {
    const logoBranch = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/800px-MasterCard_Logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png",
        "https://seeklogo.com/images/Z/zalopay-logo-643ADC36A4-seeklogo.com.png",
        "https://woocommerce.com/wp-content/uploads/2011/12/stripe-logo-blue.png",
    ];

    const totalCart = useSelector(cartItemTotal);

    return (
        <Box>
            <Typography sx={{ fontWeight: "bold", paddingBottom: "15px" }}>
                THANH TOÁN
            </Typography>

            <Divider></Divider>

            <Box sx={{ mt: 2 }}>
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ fontWeight: "bold" }}>Tổng Cộng:</Typography>
                    <Box component="span">{formatPrice(totalCart)}</Box>
                </Box>
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 1,
                    }}
                >
                    <Typography sx={{ fontWeight: "bold" }}>Vận Chuyển:</Typography>

                    <Typography component="span">
                        Free Ship
                    </Typography>
                </Box>
            </Box>

            <Button
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, fontWeight: "bold", letterSpacing: "2px" }}
            >
                THANH TOÁN
            </Button>

            <Box sx={{ mt: 3 }}>
                <Typography sx={{ fontWeight: "bold", letterSpacing: "1px" }}>
                    ĐƠN VỊ LIÊN KẾT
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px",
                        flexWrap: "no-wrap",
                        mt: 1,
                        pb: 2,
                    }}
                >
                    {logoBranch.map((url, index) => (
                        <img
                            key={index}
                            style={{
                                width: "50px",
                                height: "15px",
                                marginTop: "5px",
                                objectFit: "cover",
                            }}
                            src={url}
                            alt=""
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default CheckOut;
